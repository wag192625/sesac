package com.example.sptingprac.user;

import com.example.sptingprac.user.dto.UserCreateRequestDto;
import com.example.sptingprac.user.dto.UserListResponseDto;
import com.example.sptingprac.user.dto.UserResponseDto;
import com.example.sptingprac.user.dto.UserUpdateRequestDto;
import com.example.sptingprac.user.exception.ResourceNotFoundException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

//    @ExceptionHandler(ResourceNotFoundException.class)
//    public ResponseEntity<ApiResponse<Void>> handleResourceNotFound(ResourceNotFoundException exception) {
//        return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                .body(ApiResponse.error("resource not found", "NOT_FOUND"));
//    }



    @PostMapping
    public ResponseEntity<ApiResponse<UserResponseDto>> CreateUser(@Valid @RequestBody UserCreateRequestDto requestDto) {
        UserResponseDto user = userService.createUser(requestDto);
        ApiResponse<UserResponseDto> response = ApiResponse.ok("유저 등록 완료", "Create", user);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.ok(
                        "게시글 정상 작성됨",
                        "CREATED",
                        userService.createUser(requestDto)
                ));

    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<UserListResponseDto>>>  ReadUser() {
        ApiResponse<List<UserListResponseDto>> response = ApiResponse.ok(userService.readUsers()) ;
        return ResponseEntity.ok(response);
    }
//
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDto>> findByUser(@PathVariable Long id) {
        ApiResponse<UserResponseDto> response = ApiResponse.ok(userService.readUserById(id));
        return ResponseEntity.ok(response);

    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserResponseDto>> UpdateUser(@PathVariable Long id, @RequestBody UserUpdateRequestDto requestDto) {
        ApiResponse<UserResponseDto> response = ApiResponse.ok(userService.updateUser(id, requestDto));
        return ResponseEntity.ok(response);
    }

    //
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> DeleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        ApiResponse<Void> response = ApiResponse.ok("게시글 삭제 완료", "Delete", null);
        return ResponseEntity.ok(response);
    }
}
