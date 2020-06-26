import matplotlib.pyplot as plt

multi = [0, 5, 10, 15, 20, 25, 30]
fig, ax = plt.subplots()

ax.plot(multi, linewidth=5)

# Set chart title and label axes.
ax.set_title("Multiple of 5", fontsize=24)
ax.set_xlabel("Values", fontsize=14)
ax.set_ylabel("Multi values", fontsize=14)

# Set size of tick labels
ax.tick_params(axis='both', labelsize=14)
plt.show()
