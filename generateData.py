import csv
import random

filename = "customer_data_10k.csv"


age_ranges = [
    (18,24),
    (25,34),
    (35,44),
    (45,54),
    (55,99),
]

weights = [
    3,
    1,
    1,
    1,
    2,
]

with open(filename, "w", newline="") as f:

    writer = csv.writer(f)
    writer.writerow(["id","gender","age","spend"])
    
    for i in range(1,10001):

        low, high = random.choices(age_ranges, weights=weights, k=1)[0]
        age = random.randint(low, high)
        
        writer.writerow([
            f"{i:04d}",
            random.choices(["M","F"], weights=[0.3,0.7], k=1)[0],
            age,
            round(random.uniform(5, 300), 2)
        ])
print(f"{filename} created successfully")
