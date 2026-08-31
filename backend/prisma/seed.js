const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'syslab@paralelos.edu' },
    update: {},
    create: {
      email: 'syslab@paralelos.edu',
      name: 'Admin SysLab 2.0',
      role: 'admin',
    },
  });
  console.log('Seed ejecutado exitosamente. Usuario creado:', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
