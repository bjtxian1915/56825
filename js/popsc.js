const backToTopButton = document.getElementById('backToTop');

        // 監聽滾動事件
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        // 點擊按鈕回到頂部
        backToTopButton.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
class TextAnimator {
    constructor() {
      this.container = document.getElementById('textContainer');
      this.numbersContainer = document.getElementById('numbersContainer');
      this.baseLength = 2; // W + a
      this.currentLength = this.baseLength;
      this.maxLength = 15;
      this.minLength = 2;
      this.isAnimating = false;
      this.animationInterval = null;
  
      this.initialize();
      this.startAnimation();
    }
  
    initialize() {
      // 創建數字和箭頭
      for (let i = 1; i <= 5; i++) {
        const numberSpan = document.createElement('span');
        numberSpan.className = 'number';
        numberSpan.textContent = i;
        numberSpan.onclick = () => this.jumpTo(i + 1); // +1 因為基礎長度是2
        this.numbersContainer.appendChild(numberSpan);
      }
  
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrow.textContent = '▶';
      arrow.onclick = () => this.toggleAnimation();
      this.numbersContainer.appendChild(arrow);
    }
  
    updateText(length) {
      // 清除現有的 'a' 字母
      while (this.container.children.length > 1) {
        this.container.removeChild(this.container.lastChild);
      }
  
      // 添加新的 'a' 字母
      for (let i = 1; i < length; i++) {
        const newLetter = document.createElement('span');
        newLetter.className = 'letter';
        newLetter.textContent = 'a';
        this.container.appendChild(newLetter);
      }
      this.currentLength = length;
    }
  
    jumpTo(length) {
      length = Math.min(Math.max(length, this.minLength), this.maxLength);
      this.updateText(length);
    }
  
    toggleAnimation() {
      if (this.isAnimating) {
        this.stopAnimation();
      } else {
        this.startAnimation();
      }
    }
  
    startAnimation() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      
      this.animationInterval = setInterval(() => {
        this.currentLength++;
        if (this.currentLength > this.maxLength) {
          this.currentLength = this.minLength;
        }
        this.updateText(this.currentLength);
      }, 1000);
    }
  
    stopAnimation() {
      if (!this.isAnimating) return;
      this.isAnimating = false;
      clearInterval(this.animationInterval);
    }
  }
  
  // 初始化動畫器
  const animator = new TextAnimator();
  