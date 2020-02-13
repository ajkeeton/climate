import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

use_labels = False
plt.style.use('dark_background')
full = pd.read_csv('data.txt', delim_whitespace=True)

fig, ax = plt.subplots(figsize=(12, 5), constrained_layout=True)

ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

t = full.iloc[:, 0]
ax.fill_between(t, full.iloc[:, 5], full.iloc[:, 4], alpha=0.3)
ax.plot(t, full.iloc[:, 2])
xt = plt.xticks()
plt.xticks(rotation=70)

plt.savefig('CL12loc.png')
plt.show()

