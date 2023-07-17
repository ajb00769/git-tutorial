def announce(f):
    def wrapper(*args, **kwargs):
        print("About to run the function...")
        check_status = f(*args, **kwargs)
        print("Function execution success.")
        return check_status
    return wrapper
