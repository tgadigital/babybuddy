import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import constants from '../../constants.ts';

interface Slide {
  image: any;
  text: string;
}

interface SliderProps {
  slides: Slide[];
  autoScroll?: boolean;
  scrollInterval?: number;
  loop?: boolean;
  showPagination?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  autoScroll = true,
  scrollInterval = 3000,
  loop = true,
  showPagination = true,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScreenResize = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleScreenResize);

    return () => {
      // Dimensions.removeEventListener('change', handleScreenResize);
    };
  }, [screenWidth]);

  slides = [
    {image: require('../../assets/images/nhs.png'), text: 'Text for Slide 1'},
    {image: require('../../assets/images/nhs.png'), text: 'Text for Slide 2'},
    {image: require('../../assets/images/nhs.png'), text: 'Text for Slide 3'},
  ];

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const startAutoScroll = () => {
      if (autoScroll) {
        intervalId = setInterval(() => {
          if (scrollViewRef.current && slides.length > 1) {
            const nextIndex = (currentIndex + 1) % slides.length;

            scrollViewRef.current.scrollTo({
              x: nextIndex * screenWidth,
              animated: true,
            });

            setCurrentIndex(nextIndex);
          }
        }, scrollInterval);
      }
    };

    const stopAutoScroll = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    if (autoScroll) {
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [autoScroll, currentIndex, scrollInterval, screenWidth, slides]);
  const handleScroll = (event: any) => {
    const offset = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offset / screenWidth);

    if (loop) {
      // Зациклюємо показ слайдів
      setCurrentIndex(newIndex % slides.length);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const renderPagination = () => {
    if (showPagination) {
      return (
        <View style={styles.paginationContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                {opacity: index === currentIndex ? 1 : 0.5},
              ]}
            />
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {slides.map((slide, index) => (
          <View
            key={index}
            style={{width: screenWidth, ...styles.slideContainer}}>
            <Image
              source={slide.image}
              style={{width: '100%', height: '80%'}}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.slideText}>{slide.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      {renderPagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 10,
  },
  slideText: {
    fontSize: 16,
    textAlign: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: constants.palette.main,
  },
});

export default Slider;
