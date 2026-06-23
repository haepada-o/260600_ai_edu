#!/bin/bash
# 가이드 문서 동기화 + MkDocs 빌드 스크립트
# 사용법: ./sync-and-build.sh

set -e

PROJ_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "📄 원본 가이드 → docs/ 동기화..."
cp "$PROJ_DIR/00_시작_어디서부터_할_것인가.md" "$PROJ_DIR/docs/00_시작.md"
cp "$PROJ_DIR/01_도구_뭘_쓸_것인가.md"       "$PROJ_DIR/docs/01_도구.md"
cp "$PROJ_DIR/02_루틴_어디에_넣을_것인가.md"   "$PROJ_DIR/docs/02_루틴.md"
cp "$PROJ_DIR/03_확장_사고를_시스템으로.md"    "$PROJ_DIR/docs/03_확장.md"
cp "$PROJ_DIR/04_시스템_에이전트와_파이프라인.md" "$PROJ_DIR/docs/04_시스템.md"

# 크로스 레퍼런스 파일명 변환
cd "$PROJ_DIR/docs"
sed -i '' \
  's/00_시작_어디서부터_할_것인가\.md/00_시작.md/g;
   s/01_도구_뭘_쓸_것인가\.md/01_도구.md/g;
   s/02_루틴_어디에_넣을_것인가\.md/02_루틴.md/g;
   s/03_확장_사고를_시스템으로\.md/03_확장.md/g;
   s/04_시스템_에이전트와_파이프라인\.md/04_시스템.md/g' \
  00_시작.md 01_도구.md 02_루틴.md 03_확장.md 04_시스템.md

echo "✅ 동기화 완료"

# 빌드
cd "$PROJ_DIR"
source .venv/bin/activate 2>/dev/null || true
echo "🔨 MkDocs 빌드 중..."
mkdocs build

echo ""
echo "🎉 빌드 완료! site/ 폴더에 정적 사이트가 생성되었습니다."
echo ""
echo "📌 로컬 미리보기: mkdocs serve"
echo "📌 배포: site/ 폴더를 Vercel/Netlify/GitHub Pages에 업로드"
