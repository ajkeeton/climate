import matplotlib.pyplot as plt
import pandas as pd

plt.style.use('dark_background')

co2 = pd.read_csv('co2.csv', delim_whitespace=True)
temp = pd.read_csv('temp.csv', delim_whitespace=True)

fig, ax1 = plt.subplots(figsize=(12, 5), constrained_layout=True)

ax1.spines['top'].set_visible(False)
ax1.spines['right'].set_visible(False)
ax1.invert_xaxis()
ax2 = ax1.twinx()
ax1.plot(co2.iloc[:, 0], co2.iloc[:, 1])
ax2.plot(temp.iloc[:, 2], temp.iloc[:, 4], color='blue')

font = {'family': 'serif',
        'color':  '#0099ff',
        'size': 20,
        'weight': 'heavy'}
ax1.text(750000, 290, 'CO2 and temperature', fontdict=font)
font['weight'] = 'light'
ax1.text(750000, 280, 'Last 800,000 years', fontdict=font)
plt.savefig('800k_co2_vs_temp.png')
plt.show()
