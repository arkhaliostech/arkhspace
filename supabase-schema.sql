-- ==========================================
-- ArkhSpace v2 — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- ==========================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================
-- PROFILES TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT,
  program TEXT,
  year_level TEXT,
  productivity_score INTEGER DEFAULT 5,
  goals TEXT,
  streak_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- ==========================================
-- TASKS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS tasks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  due_date DATE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'done', 'archived')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can CRUD own tasks" ON tasks FOR ALL USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS tasks_user_id_idx ON tasks(user_id);
CREATE INDEX IF NOT EXISTS tasks_status_idx ON tasks(status);

-- ==========================================
-- HABITS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS habits (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  color TEXT DEFAULT '#2dd4bf',
  streak INTEGER DEFAULT 0,
  done_today BOOLEAN DEFAULT FALSE,
  last_done_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can CRUD own habits" ON habits FOR ALL USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS habits_user_id_idx ON habits(user_id);

-- ==========================================
-- FILES TABLE (metadata)
-- ==========================================
CREATE TABLE IF NOT EXISTS files (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  path TEXT NOT NULL,
  size BIGINT,
  type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE files ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can CRUD own files" ON files FOR ALL USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS files_user_id_idx ON files(user_id);

-- ==========================================
-- AI CHATS TABLE
-- ==========================================
CREATE TABLE IF NOT EXISTS ai_chats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  message TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE ai_chats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can CRUD own chats" ON ai_chats FOR ALL USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS ai_chats_user_id_idx ON ai_chats(user_id);
CREATE INDEX IF NOT EXISTS ai_chats_created_at_idx ON ai_chats(created_at);

-- ==========================================
-- STORAGE BUCKET
-- ==========================================
-- Run in Supabase Dashboard > Storage > Create bucket "user-files" (public: false)
-- OR run via SQL:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('user-files', 'user-files', false);

-- Storage RLS policy
-- CREATE POLICY "Users can upload own files" ON storage.objects
--   FOR INSERT WITH CHECK (auth.uid()::text = (storage.foldername(name))[1]);
-- CREATE POLICY "Users can view own files" ON storage.objects
--   FOR SELECT USING (auth.uid()::text = (storage.foldername(name))[1]);
-- CREATE POLICY "Users can delete own files" ON storage.objects
--   FOR DELETE USING (auth.uid()::text = (storage.foldername(name))[1]);

-- ==========================================
-- TRIGGERS for updated_at
-- ==========================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_habits_updated_at BEFORE UPDATE ON habits
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ==========================================
-- DUMMY DATA (for testing)
-- ==========================================
-- Note: Replace 'YOUR-USER-UUID' with an actual auth user UUID

-- INSERT INTO profiles (id, name, program, year_level, productivity_score, goals, streak_count)
-- VALUES ('YOUR-USER-UUID', 'Brent', 'Computer Science', 'undergrad_3', 7, 'Graduate with honors', 5);

-- INSERT INTO tasks (user_id, title, due_date, status, priority) VALUES
-- ('YOUR-USER-UUID', 'Math Assignment', '2026-02-28', 'pending', 'high'),
-- ('YOUR-USER-UUID', 'Read Chapter 5', '2026-03-01', 'done', 'medium'),
-- ('YOUR-USER-UUID', 'Submit Lab Report', '2026-03-03', 'pending', 'high');

-- INSERT INTO habits (user_id, title, color, streak) VALUES
-- ('YOUR-USER-UUID', 'Read 30 mins', '#2dd4bf', 3),
-- ('YOUR-USER-UUID', 'Review notes', '#fbbf24', 7),
-- ('YOUR-USER-UUID', 'Exercise', '#ff6b9d', 1);