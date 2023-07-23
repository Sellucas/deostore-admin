import { BadgePercent, DollarSign, FolderOpen, Package } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { Overview } from "@/components/overview";
import { DatePicker } from "@/components/date-picker";
import { getArchived } from "@/actions/get-archived";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);
  const archivedCount = await getArchived(params.storeId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-row justify-between items-center">
          <Heading
            title="Painel de Controle"
            description="Visão geral da sua loja"
          />
          <DatePicker />
        </div>
        <Separator />
        <div className="grid gap-4 grid-cols-4">
          <Card>
            <CardHeader className="flex flex-col items-center justify-between gap-2">
              <div className="bg-green-600 p-4 rounded-full">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-base font-semibold">
                Receita Total
              </CardTitle>
              {totalRevenue != 0 && <div className="text-xs text-muted-foreground">+49% FATURAMENTO</div>}
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between">
              <div className="text-3xl font-bold">{formatter.format(totalRevenue)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center justify-between gap-2">
              <div className="bg-blue-600 p-4 rounded-full">
                <BadgePercent className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-base font-semibold">
                Vendas
              </CardTitle>
              {salesCount != 0 && <div className="text-xs text-muted-foreground">+37% TRANSAÇÕES</div>}
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between">
              <div className="text-3xl font-bold">{salesCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center justify-between gap-2">
              <div className="bg-orange-600 p-4 rounded-full">
                <Package className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-base font-semibold">
                Produtos em Estoque
              </CardTitle>
              {stockCount != 0 && <div className="text-xs text-muted-foreground">+25% NOVOS PRODUTOS</div>}
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between">
              <div className="text-3xl font-bold">{stockCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center justify-between gap-2">
              <div className="bg-yellow-600 p-4 rounded-full">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-base font-semibold">
                Produtos Arquivados
              </CardTitle>
              <div className="text-xs text-muted-foreground">PRODUTOS FORA DE ESTOQUE</div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between">
              <div className="text-3xl font-bold">{archivedCount}</div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={graphRevenue} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
