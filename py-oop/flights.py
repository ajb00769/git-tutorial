from decorators import announce

# TODO: include option to prevent adding the same person again into the flight


class Flight():
    def __init__(self, capacity):
        self.plane_capacity = capacity
        self.passengers = []

    @announce
    def add_passenger(self, passenger_name):
        self.new_passenger = passenger_name
        if len(self.passengers) >= self.plane_capacity:
            print("Plane is full.")
            return False
        else:
            self.passengers.append(self.new_passenger)
            print(f"{self.new_passenger} was successfully added to the flight.")
            return True


flight_a380 = Flight(5)


def main():
    while True:
        passenger = input("Please enter the passenger's name: ")
        if flight_a380.add_passenger(passenger):
            print(
                f"Current flight has {len(flight_a380.passengers)} passengers.")
        else:
            print("Exiting program for flight safety...")
            print("Exit success.")
            return False


main()
