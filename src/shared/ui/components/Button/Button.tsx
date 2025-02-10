"use client"

import React, { useState } from 'react';
import './button.css';
import Left from './assets/Left';
import Right from './assets/Right';

export interface ButtonProps {
  miniOrFull?: boolean
  rounded?: boolean
  size?: 'large' | 'medium' | 'small' | 'xs'
  label: string
  backgroundColor?: 'primary' | 'secondary' | 'clear' | 'critical' | 'critical-secondary'
  disabled?: boolean
}

const Button = ({
  miniOrFull, 
  rounded, 
  size="medium", 
  label="Button", 
  backgroundColor="primary",
  disabled=false
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type='button'
      className={[
        'button fontP4', 
        `${size}-button`, `${rounded ? 'border-rounded-button' : ''}`,
        `${disabled ? 'disabled' : ''}`,
        `${miniOrFull ? `${size}-mini-button` : ''}`
      ].join(' ')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      disabled={disabled}
    >
      <span>
        <Left 
          size={size} 
          color={disabled ? 'rgba(8, 9, 28, 0.36)' : (isActive ? `var(--text-${backgroundColor}-active)` 
            : (isHovered ? `var(--text-${backgroundColor}-hover)` : `var(--text-${backgroundColor}-main)`))} 
        />
      </span>
      { !miniOrFull && (
        <span>
          {size} {label}
        </span>
        
      )}
      { !miniOrFull && (
        <span>
          <Right 
            size={size} 
            color={disabled ? 'rgba(29, 29, 38, 0.36)' : (isActive ? `var(--text-${backgroundColor}-active)` 
              : (isHovered ? `var(--text-${backgroundColor}-hover)` : `var(--text-${backgroundColor}-main)`))} 
            />
        </span>
      )}

      <style jsx>{`
        button {
          background-color: ${disabled ? 'rgba(8, 9, 28, 0.08)' : (isActive ? `var(--${backgroundColor}-active)` 
            : (isHovered ? `var(--${backgroundColor}-hover)` : `var(--${backgroundColor}-main)`))};
          color: ${disabled ? 'rgba(8, 9, 28, 0.36)' : (isActive ? `var(--text-${backgroundColor}-active)` 
            : (isHovered ? `var(--text-${backgroundColor}-hover)` : `var(--text-${backgroundColor}-main)`))};
          cursor: ${disabled ? 'default' : 'pointer'};
        }
        svg {
          fill: ${disabled ? 'rgba(8, 9, 28, 0.36)' : (isActive ? `var(--text-${backgroundColor}-active)` 
            : (isHovered ? `var(--text-${backgroundColor}-hover)` : `var(--text-${backgroundColor}-main)`))};
        }
      `}</style>
    </button>
  )
}

export default Button
