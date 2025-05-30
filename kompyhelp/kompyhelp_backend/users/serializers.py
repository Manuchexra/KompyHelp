from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model
from django.core.exceptions import ValidationError

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    """
    Foydalanuvchi ma'lumotlarini ko'rsatish uchun asosiy serializer
    """
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'role',
            'date_joined',
            'last_login'
        ]
        read_only_fields = [
            'id',
            'role',
            'date_joined',
            'last_login'
        ]
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'role']
        read_only_fields = ['id', 'role']
    
    def to_representation(self, instance):
        if instance.is_anonymous:
            return {'detail': 'Authentication credentials were not provided.'}
        return super().to_representation(instance)

class UserCreateSerializer(serializers.ModelSerializer):
    """
    Yangi foydalanuvchi yaratish uchun serializer
    """
    password = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2'
        ]

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user

class UserUpdateSerializer(serializers.ModelSerializer):
    """
    Foydalanuvchi ma'lumotlarini yangilash uchun serializer
    """
    class Meta:
        model = User
        fields = [
            'email',
            'first_name',
            'last_name',
        ]

class LoginSerializer(serializers.Serializer):
    """
    Tizimga kirish uchun serializer
    """
    email = serializers.EmailField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(
                request=self.context.get('request'),
                username=email,  # Django typically uses username for auth
                password=password
            )
            if not user:
                msg = "Email yoki parol noto'g'ri"
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = "Email va parol kiritilishi shart"
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs