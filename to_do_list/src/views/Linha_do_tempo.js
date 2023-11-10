// Calendar.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Tarefas from './Tarefas.js';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonthPress = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
    if (currentMonth - 1 < 0) {
      setCurrentYear((prevYear) => prevYear - 1);
    }
  };

  const handleNextMonthPress = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
    if (currentMonth + 1 > 11) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  };

  const renderDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysArray = [];

    for (let i = 1; i <= daysInMonth + firstDayIndex; i++) {
      const dayNumber = i - firstDayIndex;
      const currentDate = new Date(currentYear, currentMonth, dayNumber);
      const isToday = isSameDay(currentDate, new Date());

      daysArray.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.dayButton,
            {
              backgroundColor: currentDate.getMonth() === currentMonth ? (isToday ? '#ff7f50' : '#ffffff') : '#ff7f50',
              opacity: dayNumber > 0 ? 1 : 0,
            },
          ]}
          onPress={() => handleDatePress(currentDate)}
        >
          <Text style={{ color: isToday ? 'white' : '#333' }}>{dayNumber > 0 ? dayNumber : ''}</Text>
        </TouchableOpacity>
      );
    }

    return daysArray;
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.timelineText}>Linha do Tempo</Text>
      <View style={styles.calendarHeader}>
        <Button title={`${getAbbrMonthName(currentMonth - 1)} ${currentYear}`} onPress={handlePrevMonthPress} />
        <Text style={[styles.monthYearText, styles.monthYearContainer]}>{`${getAbbrMonthName(currentMonth)} ${currentYear}`}</Text>
        <Button title={`${getAbbrMonthName(currentMonth + 1)} ${currentYear}`} onPress={handleNextMonthPress} />
      </View>
      <View style={styles.calendarContainer}>{renderDays()}</View>
      {selectedDate && (
        <View style={styles.selectedDateContainer}>
          <Text style={[styles.selectedDateText, { color: 'white' }]}>{selectedDate.toDateString()}</Text>
          
        </View>
      )}
    </View>
  );
};

const getAbbrMonthName = (monthIndex) => {
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return monthNames[(monthIndex + 12) % 12];
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#4169E1',
    flex: 1,
    paddingTop: 20,
  },
  timelineText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#4169E1',
    width: '90%',
    marginTop: 10,
    maxHeight: 300,
  },
  dayButton: {
    width: '14.28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4169E1',
  },
  monthYearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  monthYearContainer: {
    backgroundColor: '#ff7f50',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  selectedDateContainer: {
    marginTop: 20,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calendar;
