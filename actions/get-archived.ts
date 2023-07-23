import prismadb from "@/lib/prismadb";

export const getArchived = async (storeId: string) => {
  const archivedCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: true,
    },
  });

  return archivedCount;
};
