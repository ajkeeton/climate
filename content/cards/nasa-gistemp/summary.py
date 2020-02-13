import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

plt.style.use('dark_background')
full = pd.read_csv('source_data.csv')

# columns are year, noaa, nasa raw, nasa smoothed
# nasa data is relative to 1951 to 1980

fig, ax = plt.subplots(figsize=(12, 5), constrained_layout=True)

ax.plot(full.iloc[:, 0], full.iloc[:, 1])
xt = plt.xticks()
plt.xticks(rotation=70)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
xt = plt.xticks()
ax.set_xticks(np.arange(1880, 2030, 10))

font = {'family': 'serif',
        'color':  '#0099ff',
        'size': 20,
        'weight': 'heavy'}
plt.text(1890, .8, "Yearly Temperature Anomalies", fontdict=font)

font['weight'] = 'light'
font['size'] = 14
plt.text(1890, .6, "1880 to 2020\nNASA GISTEMP v4", fontdict=font)

plt.savefig('nasa-gistemp.png')
plt.show()

