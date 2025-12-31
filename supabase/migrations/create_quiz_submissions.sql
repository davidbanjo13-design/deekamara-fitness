-- Create the quiz_submissions table
create table quiz_submissions (
    id uuid default uuid_generate_v4() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    name text not null,
    email text not null,
    phone text,
    country text,
    goal text not null,
    gender text not null,
    age text not null,
    motivation text,
    status text default 'new'::text,
    
    -- Add constraints
    constraint valid_goal check (goal in ('lifestyle', 'aesthetic', 'weight-loss', 'weight-gain', 'strength')),
    constraint valid_gender check (gender in ('female', 'male', 'other')),
    constraint valid_age check (age in ('under-20', '21-25', '26-30', 'over-30')),
    constraint valid_email check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    constraint valid_status check (status in ('new', 'contacted', 'scheduled', 'completed'))
);

-- Create index for faster email searches
create index idx_quiz_submissions_email on quiz_submissions(email);

-- Create index for status filtering
create index idx_quiz_submissions_status on quiz_submissions(status);

-- Add row level security (RLS) policies
alter table quiz_submissions enable row level security;

-- Policy for inserting new submissions (anyone can insert)
create policy "Anyone can insert quiz submissions"
    on quiz_submissions
    for insert
    with check (true);

-- Policy for reading submissions (only authenticated users)
create policy "Authenticated users can read quiz submissions"
    on quiz_submissions
    for select
    using (auth.role() = 'authenticated');

-- Policy for updating submissions (only authenticated users)
create policy "Authenticated users can update quiz submissions"
    on quiz_submissions
    for update
    using (auth.role() = 'authenticated');

-- Comments for better documentation
comment on table quiz_submissions is 'Stores fitness quiz submissions from potential clients';
comment on column quiz_submissions.id is 'Unique identifier for the submission';
comment on column quiz_submissions.created_at is 'Timestamp when the submission was created';
comment on column quiz_submissions.name is 'Full name of the potential client';
comment on column quiz_submissions.email is 'Email address for contact';
comment on column quiz_submissions.phone is 'Optional phone number';
comment on column quiz_submissions.country is 'Optional country of residence';
comment on column quiz_submissions.goal is 'Primary fitness goal selected';
comment on column quiz_submissions.gender is 'Gender identity selected';
comment on column quiz_submissions.age is 'Age range selected';
comment on column quiz_submissions.motivation is 'Personal motivation text';
comment on column quiz_submissions.status is 'Current status of the lead';
