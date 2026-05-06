import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../styles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorBoundary caught:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong 😵</Text>

          <Text style={styles.subtitle}>
            {this.state.error?.message || 'Unknown error'}
          </Text>

          <TouchableOpacity style={styles.button} onPress={this.handleReset}>
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY_BG,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.TEXT_PRIMARY,
  },

  subtitle: {
    fontSize: 14,
    color: Colors.TEXT_SECONDARY,
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 12,
    borderRadius: 10,
  },

  buttonText: {
    color: Colors.WHITE,
    fontWeight: '600',
  },
});
