import os, time, random
import urllib.request
import csv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup

EXECUTABLE_PATH = '/Users/sinchangyu/knu-living-lab/chromedriver'

def chromeWebdriver():
    options = Options()
    options.add_argument("lang=ko_KR")  # 언어 설정
    # options.add_argument("start-maximized") # 창 크기 최대로
    options.add_argument("disable-infobars")
    options.add_argument("--disable-extensions")    
    options.add_experimental_option('detach', True)  # 브라우저 안 닫히게
    options.add_experimental_option('excludeSwitches', ['enable-logging'])  # 시스템 장치 에러 숨기기
    user_agent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36'
    options.add_argument(f'user-agent={user_agent}')    
    # options.add_argument('--headless')  # 웹 브라우저를 시각적으로 띄우지 않는 headless chrome 옵션
    driver = webdriver.Chrome(executable_path=EXECUTABLE_PATH, options=options) 
    return driver

def collect_image(driver, search_word):
    url = 'https://www.google.co.kr'
    file_path = 'data/images'

    driver.get(url)
    time.sleep(random.uniform(2, 3))
    elem_q = driver.find_element(By.NAME, 'q')
    elem_q.send_keys(search_word)
    elem_q.submit()
    driver.find_element(By.LINK_TEXT, '이미지').click()  # 텍스트 메뉴 '이미지' 링크 클릭
    time.sleep(random.uniform(1, 2))
    
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    imgs = driver.find_elements(By.CSS_SELECTOR, '#islrg > div.islrc > div a.wXeWr.islib.nfEiy')
    img_src = imgs[0].click()  # 이미지 클릭 시 display 되는 url을 찾기 위해 클릭함
    img_src = driver.find_element(By.CSS_SELECTOR, '#Sva75c > div > div > div.pxAole > div.tvh9oe.BIB1wf > c-wiz > div > div.OUZ5W > div.zjoqD > div.qdnLaf.isv-id > div > a')
    time.sleep(random.uniform(0.2, 0.5))
    
    img_src = img_src.find_element(By.TAG_NAME, 'img').get_attribute('src')
    extention = img_src.split('.')[-1]
    ext = ''
    
    if extention in ('jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'gif', 'GIF'):
        ext = '.' + extention
    else:
        ext = '.jpg'        
    try:
        urllib.request.urlretrieve(img_src, os.path.join(file_path, search_word + ext))
        print(f'{search_word} 이미지 저장 완료')
    except Exception:
        print(f'{search_word} 이미지 저장 오류 발생')
    
if __name__ == '__main__':
    driver = chromeWebdriver()
    with open('data/product_list.csv', newline='', encoding='utf-8') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        for row in spamreader:
            collect_image(driver, row[0])