package com.example.sptingprac.user;

import com.example.sptingprac.user.dto.UserCreateRequestDto;
import com.example.sptingprac.user.dto.UserListResponseDto;
import com.example.sptingprac.user.dto.UserResponseDto;
import com.example.sptingprac.user.dto.UserUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public UserResponseDto createUser(UserCreateRequestDto requestDto) {
        User user = userRepository.save(requestDto.toEntity());

        return UserResponseDto.from(user);
    }

    public List<UserListResponseDto> readUsers() {
        return userRepository.findAll().stream()
                .map(UserListResponseDto::from)
                .toList();
    }

    public UserResponseDto readUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow();
        return UserResponseDto.from(user);
    }

    @Transactional
    public UserResponseDto updateUser(Long id, UserUpdateRequestDto requestDto) {
        User user = userRepository.findById(id)
                .orElseThrow();
        user.update(requestDto);
        return UserResponseDto.from(user);
    }

    @Transactional
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow();
        userRepository.delete(user);

    }
}
