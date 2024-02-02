import { CheckTable } from '@/components/component/check-table';
import data from '@/data/item_types.json'
import groups from '@/data/countNotNull_GroupByType.json'
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return data.map((x) => ({
        itemType: x.id,
    }))
  }

export default function Page({ params }: { params: { itemType: string } }) {
    const typeKey = params.itemType;
    if (typeKey in groups){
        const type_data = groups[typeKey];
        return (
            <div>
                <CheckTable data={type_data}></CheckTable>
            </div>

        );
    } else {
        return (notFound());
    }
}
