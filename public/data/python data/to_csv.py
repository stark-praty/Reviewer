import pandas as pd
df = pd.read_csv('C:\\Users\\Pratush\\Downloads\\spec_features.csv')
sf = df[df['Brand']=='Oppo'].reset_index(drop=True)
del sf['Unnamed: 0']
sf.to_csv('C:\\Users\\Pratush\\Downloads\\oppo.csv')
