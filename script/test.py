import csv

product_name_list = set()

# 상품명,조사일,판매가격,판매업소,제조사,세일여부,원플러스원
with open('data/daily_necessity_price.csv', newline='', encoding='utf-8') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',')
    for row in spamreader:
        product_name, analysis_data, price, store, manufacturer, sale, w1 = row
        product_name_list.add(product_name)
with open('data/product_list.csv', 'w', encoding='utf-8') as f:
    for product_name in product_name_list:
        f.write(f'{product_name}\n')