import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import gzip

plt.style.use('dark_background')
data = gzip.open('ensembles-50yearsmth.txt.gz')
full = pd.read_csv(data, delim_whitespace=True)
# skip years column
full = full.iloc[:, 1:]

# Columns refer to different papers, and each dataset is split out by different
# reference year range
# Going to generate a plot showing the averages for each study and present the 
# highs and lows
col_by_name = {'Jones': pd.DataFrame(), 'Frank': pd.DataFrame(), 'Briffa': pd.DataFrame(), 'MannJones': pd.DataFrame(), 'Moberg': pd.DataFrame(), 'DArrigo': pd.DataFrame(), 'Hegerl': pd.DataFrame(), 'Juckes': pd.DataFrame(), 'Mann2008': pd.DataFrame()}
noffset = 0

for c in full.columns:
    for n in col_by_name:
        if c.startswith(n):
            col_by_name[n] = pd.concat([col_by_name[n], full.iloc[:, noffset]], axis=1)
    noffset += 1

avg_by_name = {}
maxx = {}
minn = {}
diff = {}

for name in col_by_name:
    avg_by_name[name] = col_by_name[name].mean(1)
    maxx[name] = col_by_name[name].max(1)
    minn[name] = col_by_name[name].min(1)

t = np.arange(1000, 2001)
fig, ax = plt.subplots(figsize=(12, 5), constrained_layout=True)
final = pd.DataFrame()
for name in avg_by_name:
    final = pd.concat([final, avg_by_name[name]], axis=1, sort=True)
    ax.fill_between(t, minn[name], maxx[name], label=name, alpha=0.3)

ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

ax.plot(t, final, alpha=0.7)
xt = plt.xticks()
ax.set_xticks(np.arange(1000, 2050, 50))
plt.xticks(rotation=70)

font = {'family': 'serif',
        'color': '#0099ff',
        'size': 20,
        'weight': 'heavy'}
plt.text(1100, 0.5,'Past 1000 years', fontdict=font)

font['size'] = 14
font['weight'] = 'light'
plt.text(1100, 0.3, '9 Studies Overlayed', fontdict=font)

plt.annotate('1880\'s!', xy=(1880, -0.2), xytext=(1750, 0.1), 
        arrowprops=dict(facecolor='black', shrink=0.005))

plt.savefig('paleo-1000.png')
plt.show()

