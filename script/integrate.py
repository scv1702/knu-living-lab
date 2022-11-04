import csv
import pandas as pd

products = pd.read_csv('data/daily_necessity_price.csv', index_col=None)
category = pd.read_csv('data/category.csv', index_col=None)
result = pd.merge(products, category, left_on='상품명', right_on='상품명', how='inner')
result.to_csv('data/result.csv', index=False)