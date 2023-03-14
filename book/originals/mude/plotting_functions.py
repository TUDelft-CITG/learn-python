import numpy as np
import matplotlib.pyplot as plt

def plot_taxi_time_series(array):
    plt.figure(figsize=(10, 10))
    plt.plot(array[:,0], array[:,1])
    plt.xlabel('Day of the year')
    plt.ylabel('Daily total duration of taxi rides [minutes]')
    plt.show()
    
def plot_taxi_weeks(array, labels):
    plt.figure(figsize=(5, 8))
    plt.imshow(array)
    plt.xticks([0, 1, 2, 3, 4, 5, 6], labels, rotation=60)
    plt.ylabel('Week number')
    plt.yticks(np.arange(26), np.arange(1,27))
    bar = plt.colorbar()
    bar.set_label('Total daily taxi ride duration [minutes]')