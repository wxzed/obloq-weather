Obloq_Weather.Obloq_http_setup(
SerialPin.P1,
SerialPin.P2,
"hitest",
"12345678"
)
Obloq_Weather.Set_location(LOCATION.Pulau_Ubin)
basic.forever(function () {
    basic.showString(Obloq_Weather.get_temperature())
    basic.pause(2000)
})
