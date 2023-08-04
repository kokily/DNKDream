import db from '../database';

export default async function overlapTags(tags: string[]) {
  let overlapTags = tags.length === 0 ? [] : tags.map((tag) => tag.trim());

  try {
    overlapTags.map(async (tag) => {
      const exist = await db.tag.findFirst({ where: { name: tag } });

      if (!exist) {
        await db.tag.create({
          data: { name: tag },
        });
      }
    });

    return overlapTags;
  } catch (err: any) {
    return err;
  }
}
