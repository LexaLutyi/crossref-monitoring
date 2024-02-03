import pandas as pd

def template(fname: str):
    # fname = name.lower().replace(' ', '-')
    name = fname.capitalize().replace('-', ' ')
    content = f"# {name}\n"\
    "\n"\
    "## Null Values\n"\
    "\n"\
    "{{ read_csv('assets/tables/" + fname + ".csv') }}\n"
    with open('docs/item-types/' + fname + '.md', "w") as io:
        print(content, file=io)

df = pd.read_json('data\countNotNull_GroupByType.json', orient='index')
for name in df.index:
    template(name)