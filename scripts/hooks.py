import os
import pandas as pd

def table_null():
    output = 'assets/tables/'
    if not os.path.exists(output):
        os.makedirs(output)
    df_all = pd.read_json('data/countNotNull_GroupByType.json', orient='index')
    for name in df_all.index:
        df = df_all.loc[df_all.index == name]
        names = [df[col][name]['name'] for col in df if df[col][name]]
        ratio = [df[col][name]['passedRatio'] for col in df if df[col][name]]
        failed = [df[col][name]['failed'] for col in df if df[col][name]]
        passed = [df[col][name]['passed'] for col in df if df[col][name]]

        table = pd.DataFrame({
            "Name": names,
            "Not null": passed,
            "Null": failed,
            "Not null, %": ratio
        })
        table = table.sort_values(by=['Not null', 'Name'], ascending=[False, True])
        table.to_csv('assets/tables/' + name + '.csv', index=False)

def table_type():
    df = pd.read_json('data/item_types.json', orient='records')
    df = df.rename(columns={"id": "Item type", "value": "Count", "part": "Share, %"})
    df.to_csv('assets/tables/item_types.csv', index=False)

def on_pre_build(config, **kwargs) -> None:
    table_null()
    table_type()