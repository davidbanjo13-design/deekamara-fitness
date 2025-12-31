-- Update valid_goal constraint to support the new goal option: weight-gain
-- Run this in Supabase SQL Editor (or via migrations) after deploying the UI change.

alter table public.quiz_submissions
  drop constraint if exists valid_goal;

alter table public.quiz_submissions
  add constraint valid_goal
  check (goal in ('lifestyle', 'aesthetic', 'weight-loss', 'weight-gain', 'strength'));


