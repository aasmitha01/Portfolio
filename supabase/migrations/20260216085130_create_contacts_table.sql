/*
  # Create contacts table for portfolio contact form

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address of the person
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp when the message was submitted

  2. Security
    - Enable RLS on `contacts` table
    - Add policy to allow anyone to insert new contact messages (public form)
    - Add policy to allow only authenticated users to read contact messages

  3. Notes
    - This table stores contact form submissions from the portfolio website
    - Public insert is allowed since this is a contact form
    - Only authenticated users (site owner) can read the messages
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
