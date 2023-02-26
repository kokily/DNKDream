import { Tag } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import prevData from './prevData/Tag.json';

const db = new PrismaClient();

async function seed() {
  function getData() {
    const data: Tag[] = prevData.map((nextData) => {
      return {
        id: nextData.id,
        name: nextData.name,
        createdAt: new Date(nextData.createdAt),
      };
    });

    return data;
  }

  await Promise.all(
    getData().map((data) => {
      return db.tag.create({ data });
    })
  );
}

seed();
