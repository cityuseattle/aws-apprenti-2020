import matplotlib.pyplot as plt

multi  = [ 0, 5, 10, 15, 20, 25, 30]
plt.style.use('seaborn')
fig, ax = plt.subplots()

ax.plot(multi, linewidth =5)


ax.set_title(" Multiple of 5", fontsize = 24)
ax.set_xlabel("Values", fontsize = 14)
ax.set_ylabel("Multi Values", fontsize = 14)

ax.tick_params(axis = 'both', labelsize =14)
plt.show()