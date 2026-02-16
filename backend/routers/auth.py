from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional

router = APIRouter(prefix="/auth", tags=["auth"])


class LoginRequest(BaseModel):
    username: str
    password: str


class UserResponse(BaseModel):
    id: str
    name: str
    role: str


class LoginResponse(BaseModel):
    user: UserResponse
    token: str


# 簡易的な認証（本番環境では適切な認証実装が必要）
USERS = {
    "admin": {
        "id": "1",
        "name": "管理者",
        "role": "admin",
        "password": "admin123"  # 本番環境ではハッシュ化が必要
    },
    "approver": {
        "id": "2",
        "name": "承認者",
        "role": "approver",
        "password": "approver123"  # 本番環境ではハッシュ化が必要
    }
}


@router.post("/login", response_model=LoginResponse)
async def login(credentials: LoginRequest):
    """ログインエンドポイント"""
    user = USERS.get(credentials.username)
    
    if not user or user["password"] != credentials.password:
        raise HTTPException(status_code=401, detail="ユーザー名またはパスワードが正しくありません")
    
    # 本番環境では適切なJWTトークンを生成
    token = f"token_{user['id']}_{user['role']}"
    
    return LoginResponse(
        user=UserResponse(
            id=user["id"],
            name=user["name"],
            role=user["role"]
        ),
        token=token
    )


@router.get("/me", response_model=UserResponse)
async def get_current_user(token: Optional[str] = None):
    """現在のユーザー情報を取得"""
    if not token:
        raise HTTPException(status_code=401, detail="認証が必要です")
    
    # 簡易的なトークン検証（本番環境では適切な実装が必要）
    if token.startswith("token_"):
        parts = token.split("_")
        if len(parts) >= 3:
            user_id = parts[1]
            role = parts[2]
            
            # ユーザー情報を取得
            for username, user_data in USERS.items():
                if user_data["id"] == user_id:
                    return UserResponse(
                        id=user_data["id"],
                        name=user_data["name"],
                        role=user_data["role"]
                    )
    
    raise HTTPException(status_code=401, detail="無効なトークンです")
