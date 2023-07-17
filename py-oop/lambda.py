people = [
    {"name": "Harry", "house": "Gryffindor"},
    {"name": "Cho", "house": "Ravenclaw"},
    {"name": "Draco", "house": "Slytherin"}
]


# def f(person):
#     return person["name"]


people.sort(key=lambda person: person["name"])
print(people)

names = ["John", "Carl", "Mark"]
names.sort()
print(names)
