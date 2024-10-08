import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker

const Employer = () => {
    const [selectedValue, setSelectedValue] = useState('1-49'); // Add state for Picker

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>
                Bạn chưa đăng việc làm nào trước đây, vì vậy bạn cần tạo một tài khoản nhà tuyển dụng.
            </Text>
            <View style={styles.managerContainer}>
                <Text style={styles.label}>Tên công ty của bạn *</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên công ty của bạn"
                placeholderTextColor="gray"
            />
            <View style={styles.managerContainer}>

                <Text style={styles.label}>Số lượng nhân viên của công ty *</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue: string, itemIndex: number) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Chọn một tùy chọn" value="" />
                    <Picker.Item label="1 đến 49" value="1-49" />
                    <Picker.Item label="50 đến 100" value="50-100" />
                    <Picker.Item label="101 đến 149" value="101-149" />
                    <Picker.Item label="150 đến 199" value="150-199" />
                </Picker>
            </View>
            <View style={styles.managerContainer}>

                <Text style={styles.label}>Họ và tên đệm *</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Nhập họ và tên"
                placeholderTextColor="gray"
            />

            <View style={styles.managerContainer}>
                <Text style={styles.label}>Bạn có phải là nhà quản lý tuyển dụng?</Text>
                <Text style={{ marginBottom: 10 }}>(Các) ứng viên được tuyển dụng sẽ làm việc trong chuỗi cấp dưới của bạn.*</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue: string, itemIndex: number) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Chọn một tùy chọn" value="" />
                    <Picker.Item label="Có" value="yes" />
                    <Picker.Item label="Không" value="no" />

                </Picker>
            </View>
            <View style={styles.managerContainer}>
                <Text style={styles.label}>Làm thế nào bạn biết được chúng tôi</Text>
            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue: string, itemIndex: number) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Chọn một tùy chọn" value="" />
                    <Picker.Item label="Google" value="google" />
                    <Picker.Item label="Facebook" value="facebook" />
                    <Picker.Item label="LinkedIn" value="linkedin" />
                    <Picker.Item label="Twitter" value="twitter" />
                    <Picker.Item label="Instagram" value="instagram" />
                    <Picker.Item label="Pinterest" value="pinterest" />
                    <Picker.Item label="YouTube" value="youtube" />
                    <Picker.Item label="Tìm kiếm trên web" value="search" />
                    <Picker.Item label="Quảng cáo trên web" value="ads" />
                    <Picker.Item label="Bài viết trên blog" value="blog" />
                </Picker>
            </View>
            <View style={styles.managerContainer}>
                <Text style={styles.label}>Cho tôi biết số điện thoại</Text>

            </View>

            <TextInput
                style={styles.input}
                placeholder="Nhập số điện thoại của bạn"
                placeholderTextColor="gray"
            />

            <View style={styles.saveButtonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={() => { /* Add your save logic here */ }}>
                    <Text style={styles.saveButtonText}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white', // Ensure background color is not black
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
    },
    pickerContainer: {
        borderColor: 'gray', // Add border color
        borderWidth: 1, // Add border width
        borderRadius: 10, // Optional: Add border radius for rounded corners
        width: '80%',
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: '100%', // Ensure picker takes full width of container
    },
    managerContainer: {
        flexDirection: 'column', // Ensure the labels are stacked vertically
        alignItems: 'flex-start', // Align the labels to the start of the container
        // marginBottom: 10,
        width: '80%',
    },

    saveButtonContainer: {
        position: 'relative',
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Employer;