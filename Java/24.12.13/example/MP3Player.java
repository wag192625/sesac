package org.example;

public class MP3Player {
    String model;
    int volume;
    boolean isOn;

    public MP3Player(String model) {
        this.model = model;
        this.volume = 0;
        this.isOn = false;
    }

    boolean pushPowerButton() {
        if (this.isOn) {
            return this.turnOff();
        } else {
            return this.turnOn();
        }
    }

    boolean turnOn() {
        this.isOn=true;
        this.volume = 40;

        return this.isOn;
    }
    boolean turnOff() {
        this.isOn=false;
        this.volume = 0;
        return this.isOn;
    }

    int volumeUp() {
        if (!isOn){
            return 0;
        }
        this.volume +=20;
        if (this.volume > 100) {
            this.volume =100;
        }
        return this.volume;
    }
    int volumeDown() {
        if (!isOn) {
            return 0;
        }
        this.volume -=20;
        if (this.volume < 0) {
            this.volume = 0;
        }
        return this.volume;
//        return (this.volume<0 ? 0 : this.volume);
    }

    void mp3Info() {
        System.out.println("isOn : " + isOn + " volume : " + this.volume);
//        System.out.println("modelName : %s , isOn : %b, volume : %d",model, isOn, volume);
    }
}
