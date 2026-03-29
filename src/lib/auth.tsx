"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  bio: string;
  role: "member" | "researcher" | "moderator";
  joinedAt: string;
  avatar: string;
  interests: string[];
  location?: string;
  postCount: number;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<{ error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const DEMO_USERS: User[] = [
  {
    id: "u1",
    name: "Dr. Sarah Chen",
    username: "sarahchen",
    email: "sarah@example.com",
    bio: "Plasma physicist at MIT. Working on high-temperature superconducting magnets for compact tokamaks. 10+ years in fusion research.",
    role: "researcher",
    joinedAt: "2024-01-15",
    avatar: "SC",
    interests: ["Tokamaks", "Superconductors", "Plasma Physics"],
    location: "Cambridge, MA",
    postCount: 247,
  },
  {
    id: "u2",
    name: "Marcus Webb",
    username: "marcuswebb",
    email: "marcus@example.com",
    bio: "Energy analyst and fusion investor. Tracking the commercialization race from NIF to private startups.",
    role: "member",
    joinedAt: "2024-03-20",
    avatar: "MW",
    interests: ["Investment", "Policy", "Commercialization"],
    location: "London, UK",
    postCount: 89,
  },
];

const STORAGE_KEY = "fh_users";
const SESSION_KEY = "fh_session";

function getStoredUsers(): User[] {
  if (typeof window === "undefined") return DEMO_USERS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const stored: User[] = raw ? JSON.parse(raw) : [];
    const existingIds = new Set(stored.map((u) => u.id));
    const merged = [...stored];
    for (const d of DEMO_USERS) {
      if (!existingIds.has(d.id)) merged.push(d);
    }
    return merged;
  } catch {
    return DEMO_USERS;
  }
}

function saveUser(user: User) {
  const users = getStoredUsers();
  const idx = users.findIndex((u) => u.id === user.id);
  if (idx >= 0) {
    users[idx] = user;
  } else {
    users.push(user);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

// passwords are stored as plain text for this demo — do NOT do this in production
const PW_KEY = "fh_passwords";

function getPasswords(): Record<string, string> {
  try {
    const raw = localStorage.getItem(PW_KEY);
    return raw
      ? JSON.parse(raw)
      : { "sarah@example.com": "demo1234", "marcus@example.com": "demo1234" };
  } catch {
    return {};
  }
}

function savePassword(email: string, password: string) {
  const pws = getPasswords();
  pws[email] = password;
  localStorage.setItem(PW_KEY, JSON.stringify(pws));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const sessionId = localStorage.getItem(SESSION_KEY);
      if (sessionId) {
        const users = getStoredUsers();
        const found = users.find((u) => u.id === sessionId);
        if (found) setUser(found);
      }
    } catch {}
    setIsLoading(false);
  }, []);

  async function login(email: string, password: string) {
    const passwords = getPasswords();
    if (!passwords[email]) return { error: "No account found with that email." };
    if (passwords[email] !== password) return { error: "Incorrect password." };
    const users = getStoredUsers();
    const found = users.find((u) => u.email === email);
    if (!found) return { error: "Account not found." };
    setUser(found);
    localStorage.setItem(SESSION_KEY, found.id);
    return {};
  }

  async function signup(name: string, email: string, password: string) {
    const users = getStoredUsers();
    if (users.find((u) => u.email === email)) {
      return { error: "An account with that email already exists." };
    }
    const username = name.toLowerCase().replace(/\s+/g, "") + Math.floor(Math.random() * 999);
    const newUser: User = {
      id: "u" + Date.now(),
      name,
      username,
      email,
      bio: "New FusionHub member.",
      role: "member",
      joinedAt: new Date().toISOString().split("T")[0],
      avatar: name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
      interests: [],
      postCount: 0,
    };
    saveUser(newUser);
    savePassword(email, password);
    setUser(newUser);
    localStorage.setItem(SESSION_KEY, newUser.id);
    return {};
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function getPublicMembers(): User[] {
  return getStoredUsers();
}
