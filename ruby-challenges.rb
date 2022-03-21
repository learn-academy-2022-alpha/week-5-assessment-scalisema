# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def word_finder(array,letter)
    array.select{|word|word.include?(letter)}
    end
p word_finder(beverages_array,letter_o)
p word_finder(beverages_array,letter_t)



# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def nums_arrays(n_array)
    n_array.sum
end
p nums_arrays(nums_array1)
p nums_arrays(nums_array2)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# "The #model bike has #wheels wheels and is going #current_speed mph.""
# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize(model, wheels=2, current_speed=0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
    end
    def pedal_faster int
        @current_speed += int
        p @current_speed
    end
    def brake int
        @current_speed -= int 
        @current_speed = 0 if @current_speed < 0
        p @current_speed
    end
end
peewees_bike = Bike.new('Pee-Wees')
peewees_bike.bike_info
peewees_bike.pedal_faster(10)
peewees_bike.pedal_faster(18)
peewees_bike.brake(5)
peewees_bike.brake(25)
