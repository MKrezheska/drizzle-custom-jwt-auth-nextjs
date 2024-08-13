import { insertUser } from '@/drizzle/db';
import { NewUser } from '@/drizzle/schema';

async function main() {
  const newUser: NewUser = {
    name: 'user',
    email: 'user@example.com',
    password: '12345a',
  };
  const res = await insertUser(newUser);
  console.log('Successfully seeded users table:', res);
  process.exit();
}

main();
