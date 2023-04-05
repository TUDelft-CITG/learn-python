# -*- coding: utf-8 -*-
"""
Created on Sat Mar 25 19:36:08 2023

@author: mmendozalugo
"""
import numpy as np
l = 12
a = 6.07
b = 5.97

data = np.loadtxt(r'C:\Users\mmendozalugo\OneDrive\PhD\Work\Python_MOOC\PM\learn-python\V3AX_WIM_BR.csv',
                 delimiter=",",skiprows=1)

data = np.loadtxt(r'C:\Users\Rude_\OneDrive\PhD\Work\Python_MOOC\PM\learn-python\V3AX_WIM_BR.csv',
                 delimiter=",",skiprows=1)


# #check values the axles must be  A1<A2, A1<A3, A3<A2, i.e, A2>A3>A1
# data[:,0] =  [round(data[i,1]*np.random.uniform(.4, .7),1)  if data[i,0]>data[i,1] else data[i,0] for i in range(len(data)) ]

# data[:,0] =  [round(data[i,2]*np.random.uniform(.7, .9),1)  if data[i,0]>data[i,2] else data[i,0] for i in range(len(data)) ]

# #inter-axle distance D1>a and D1>D2
# data[:,3] =  [round(np.random.uniform(4.7, 6),1)  if data[i,3]>6 else data[i,3] for i in range(len(data))]

sum(data[:,1]>data[:,0]) #A2>A1
sum(data[:,1]>data[:,2]) #A2>A3
sum(data[:,2]>data[:,0]) #A2>A3
sum(data[:,3]>data[:,4]) #D1>D2
sum(data[:,3]<a) #D1>a


axle_loads = data[:,0:3]
inter_axle_distances  = data[:,3:5] #m

resultant = np.sum(axle_loads, axis=1)

r_a = (resultant*b)/l
r_b = (resultant*a)/l

m = r_a*b-axle_loads[:,0]*inter_axle_distances[:,0]

min_m = np.min(m)
max_m = np.max(m)
mean_m = np.mean(m)

print(f'The min, max and mean bending moments are: {min_m:.2f}kNm, {max_m:.2f}kNm  and {mean_m:.2f}kNm  correspongly ')

idx_min_m = np.where(m==min_m)[0][0]
idx_max_m = np.where(m==max_m)[0][0]

vehicle_min_m = data[idx_min_m]
vehicle_max_m = data[idx_max_m]

print(f'The vehicle that causes the min bending moment is the vehile number {idx_min_m}\n'
      f'With axle loads: {vehicle_min_m[0:3]} in kN\n'
      f'and inter-axle distances: {vehicle_min_m[3:5]} in m \n')

print(f'The vehicle that causes the max bending moment is the vehile number {idx_max_m}\n'
      f'With axle loads: {vehicle_max_m[0:3]} in kN\n'
      f'and inter-axle distances: {vehicle_max_m[3:5]} in m \n')

#%% Exercise create an syntetic vehicle using the maximum value of each column un the database
#and compute the maximum bending moment in the same bridge 

max_truck = np.max(data,axis=0)
axle_loads = max_truck[0:3]
inter_axle_distances  = max_truck[3:5] #m
resultant = np.sum(axle_loads)

r_a = (resultant*b)/l
r_b = (resultant*a)/l

m = r_a*b-axle_loads[0]*inter_axle_distances[0]





#%%
import pandas as pd 


d = pd.read_csv(r'C:\Users\mmendozalugo\OneDrive\PhD\Work\Python_MOOC\PM\learn-python\V3AX_WIM_BR.csv')
    

d = pd.read_csv(r"C:\Users\mmendozalugo\OneDrive\PhD\Work\Education_Related\MUDE\WIM_BR_APRIL.csv")
d = d[d['class']=='3C ou 3CD ou 3DC'][0:100].drop_duplicates().reset_index(drop=True)

d= d[['weight_axle1_kg', 'weight_axle2_kg',
       'weight_axle3_kg','distance_inter_axle2_cm',
       'distance_inter_axle3_cm']]


d[['weight_axle1_kg', 'weight_axle2_kg','weight_axle3_kg']] = round(d[['weight_axle1_kg', 'weight_axle2_kg','weight_axle3_kg']]*0.00980665,1)

d[['distance_inter_axle2_cm','distance_inter_axle3_cm']] = round(d[['distance_inter_axle2_cm','distance_inter_axle3_cm']]/100,1)

d.columns = ['A1_kN','A2_kN','A3_kN','D1_m','D2_m']
d.to_csv(r'C:\Users\mmendozalugo\OneDrive\PhD\Work\Python_MOOC\PM\learn-python\V3AX_WIM_BR.csv',index=False)

