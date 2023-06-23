let pin_0 = pins.digitalReadPin(DigitalPin.P0)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 180)
    servos.P1.setStopOnNeutral(true)
    robotbit.Servo(robotbit.Servos.S1, 51)
    robotbit.GeekServo(robotbit.Servos.S2, -45)
    servos.P0.run(50)
})
