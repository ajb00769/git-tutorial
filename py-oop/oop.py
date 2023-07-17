# --- BASIC OOP EXAMPLE ---

class Point():
    def __init__(self, input1, input2):
        self.x = input1
        self.y = input2


coord = Point(1, 2)
coord2 = Point(3, 4)

print(coord.x)
print(coord.y)
print(coord2.x)
print(coord2.y)
