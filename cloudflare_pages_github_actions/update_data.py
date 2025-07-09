import pandas as pd

# 模擬資料更新
df = pd.DataFrame({
    "代號": ["2330", "2317"],
    "名稱": ["台積電", "鴻海"],
    "24M06 年增率": [10.5, 5.2]
})
df.to_csv("Goodinfo_年增率_歷年比較_含新產業分類test.csv", index=False, encoding="utf-8-sig")