package org.example.etc;

public class GenericPrac<T, V> {
    public T value;
    public V value2;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
