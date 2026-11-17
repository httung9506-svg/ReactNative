# BÀI TẬP 04: XÂY DỰNG ỨNG DỤNG MULTISCREENAPP

## 1. Giới thiệu

Xây dựng ứng dụng React Native có chức năng chuyển đổi giữa nhiều màn hình bằng Stack Navigation.

Ứng dụng gồm 3 màn hình:
- HomeScreen: Màn hình trang chủ.
- ListScreen: Màn hình hiển thị danh sách sản phẩm.
- DetailScreen: Màn hình hiển thị thông tin chi tiết sản phẩm.

## 2. Công nghệ sử dụng

- React Native
- Expo Snack
- React Navigation
- Stack Navigation
- JavaScript

## 3. Link ứng dụng

https://snack.expo.dev/@tung9506/multiscreenapp

## 4. Chức năng ứng dụng

### 4.1. HomeScreen
- Hiển thị trang chủ.
- Có nút Xem danh sách để chuyển sang ListScreen.

### 4.2. ListScreen
- Hiển thị danh sách 3 sản phẩm.
- Chọn một sản phẩm để xem thông tin chi tiết.

### 4.3. DetailScreen
- Hiển thị mã sản phẩm.
- Hiển thị tên sản phẩm.
- Hiển thị mô tả sản phẩm.
- Có nút Quay lại để trở về màn hình trước.

## 5. Điều hướng màn hình

Sử dụng Stack Navigation để điều hướng giữa 3 màn hình:

- HomeScreen → ListScreen
- ListScreen → DetailScreen
- DetailScreen → ListScreen

## 6. Các thành phần code chính

### Khởi tạo Stack Navigation

```javascript
const Stack = createNativeStackNavigator();
```

### Điều hướng đến danh sách

```javascript
navigation.navigate('List');
```

### Điều hướng đến chi tiết

```javascript
navigation.navigate('Detail', { item });
```

### Quay lại màn hình trước

```javascript
navigation.goBack();
```

## 7. Cấu trúc thư mục

```text
ReactNative
└── Bai02
    └── Bt04
        ├── App.js
        ├── package.json
        └── README.md
```

## 8. Kết quả

Ứng dụng đã hoàn thành 3 màn hình HomeScreen, ListScreen và DetailScreen. Các chức năng chuyển màn hình, xem chi tiết và quay lại hoạt động bình thường.

## 9. Kết luận

Hoàn thành bài thực hành xây dựng giao diện ứng dụng React Native sử dụng Stack Navigation.
