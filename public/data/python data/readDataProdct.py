import pandas as pd
import os
#path = os.chdir('C:\\Users\\Pratush\\Downloads\\')
#df = pd.read_csv('product_url.csv')
#or
df = pd.read_csv("C:\\Users\\Pratush\\Downloads\\product_url.csv")
product_name = df['product_name']
img_src = df['img_src']
print(product_name.head())
print(img_src.head())
print(product_name[2])

