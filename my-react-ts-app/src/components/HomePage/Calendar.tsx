import { useState } from 'react';

type props = {
    depatureDay: Date | null ;
    setDepatureDay:  React.Dispatch<React.SetStateAction<Date | null>>;
    arrivalDay: Date | null;
    setArrivalDay:React.Dispatch<React.SetStateAction<Date | null>>
}

const MONTH_NAMES = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

const WEEK_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function DateRangeCalendar({
    depatureDay: startDate,
    setDepatureDay: setStartDate,
    arrivalDay: endDate,
    setArrivalDay: setEndDate
}:props) {
  // Текущая дата определяет ЛЕВЫЙ (первый) месяц. ПРАВЫЙ месяц всегда будет +1.
  const [currentMonthDate, setCurrentMonthDate] = useState(new Date());

  // Вычисляем объект даты для правого (следующего) месяца
  const nextMonthDate = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

  // Вычисляем смещение для первого дня конкретного месяца (0 - Пн, 6 - Вс)
  const getFirstDayOffset = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1;
  };

  // Генерируем массив дней для переданного месяца
  const getMonthData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const totalDays = daysInMonth(year, month);
    
    const daysArray: Date[] = [];
    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(new Date(year, month, i));
    }
    return daysArray;
  };

  // Перелистывание смещает календарь на 1 месяц вперед/назад
  const handlePrevMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthDate(new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1));
  };

  // Очистка времени для корректного сравнения дат в миллисекундах
  const resetTime = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  };

  const handleDateClick = (clickedDate: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (resetTime(clickedDate) < resetTime(startDate)) {
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    }
  };

  const isDateInRange = (day: Date) => {
    if (!startDate || !endDate) return false;
    const dateTime = resetTime(day);
    return dateTime > resetTime(startDate) && dateTime < resetTime(endDate);
  };

  const isSameDay = (date1: Date, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return date1.toDateString() === date2.toDateString();
  };

  // Рендеринг сетки для одного конкретного месяца
  const renderMonthGrid = (date: Date) => {
    const offset = getFirstDayOffset(date);
    const monthDays = getMonthData(date);

    return (
      <div>
        {/* Заголовок месяца */}
        <h4 style={{ margin: '0 0 15px 0', textAlign: 'center' }}>
          {MONTH_NAMES[date.getMonth()]} {date.getFullYear()}
        </h4>

        {/* Сетка дней */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', textAlign: 'center' }}>
          {WEEK_NAMES.map(day => (
            <div key={day} style={{ fontWeight: 'bold', padding: '5px 0', color: '#666', fontSize: '13px' }}>
              {day}
            </div>
          ))}
          
          {/* Пустые ячейки для выравнивания первой недели */}
          {Array.from({ length: offset }).map((_, index) => (
            <div key={`empty-${index}`} />
          ))}
          
          {/* Дни месяца */}
          {monthDays.map((dayObj, index) => {
            const isStart = isSameDay(dayObj, startDate);
            const isEnd = isSameDay(dayObj, endDate);
            const inRange = isDateInRange(dayObj);

            let background = 'transparent';
            let color = '#000';
            let borderRadius = '0';

            if (isStart || isEnd) {
              background = '#007bff';
              color = '#fff';
              borderRadius = isStart ? '4px 0 0 4px' : '0 4px 4px 0';
              if (isStart && !endDate) borderRadius = '4px';
            } else if (inRange) {
              background = '#e6f2ff';
            }

            return (
              <div 
                key={index} 
                style={{ 
                  padding: '10px 0', 
                  cursor: 'pointer',
                  background: background,
                  color: color,
                  borderRadius: borderRadius,
                  fontSize: '14px',
                  transition: 'background 0.1s ease'
                }}
                onClick={() => handleDateClick(dayObj)}
              >
                {dayObj.getDate()}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div style={{ 
        maxWidth: '900px',
        margin: '20px auto', 
        fontFamily: 'sans-serif', 
        border: '1px solid #ddd', 
        padding: '20px', 
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      
      {/* Шапка с кнопками навигации */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={handlePrevMonth} style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', background: '#fff' }}>&lt;</button>
        <span style={{ fontWeight: 'bold', color: '#333' }}>Выбор диапазона</span>
        <button onClick={handleNextMonth} style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc', background: '#fff' }}>&gt;</button>
      </div>

      {/* Контейнер для двух месяцев */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        {renderMonthGrid(currentMonthDate)}
        {renderMonthGrid(nextMonthDate)}
      </div>

      {/* Вывод выбранных дат */}
      <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #eee', fontSize: '14px', color: '#333', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <div><strong>Старт:</strong> {startDate ? startDate.toLocaleDateString() : 'Не выбрано'}</div>
        <div><strong>Конец:</strong> {endDate ? endDate.toLocaleDateString() : 'Не выбрано'}</div>
      </div>
    </div>
  );
}

export default DateRangeCalendar;
