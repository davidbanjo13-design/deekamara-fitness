-- Drop existing policies if they exist
drop policy if exists "Anyone can insert quiz submissions" on quiz_submissions;
drop policy if exists "Authenticated users can read quiz submissions" on quiz_submissions;
drop policy if exists "Authenticated users can update quiz submissions" on quiz_submissions;

-- Create new policies
create policy "Enable insert access for all users"
    on quiz_submissions
    for insert
    to public  -- This allows any user (including anonymous) to insert
    with check (true);  -- No additional checks required for inserts

create policy "Enable read access for authenticated users only"
    on quiz_submissions
    for select
    to authenticated  -- This restricts read access to authenticated users
    using (true);

create policy "Enable update access for authenticated users only"
    on quiz_submissions
    for update
    to authenticated  -- This restricts update access to authenticated users
    using (true);
