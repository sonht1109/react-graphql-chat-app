import React, { Children, ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import theme from "../../common/theme";

export interface ISubMenuItem {
  type: "link" | "trigger";
  href?: string;
  callback?: () => void;
  icon?: ReactNode;
  title: string;
}

export interface ISubMenu {
  menus: ISubMenuItem[];
  minWidth?: string;
  parent: any;
}

export default function SubMenu({ menus, parent, minWidth = "0px" }: ISubMenu) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    const parentCurrent = parent.current;

    document.addEventListener("mousedown", handleClickOutside);
    if (parent && parentCurrent) {
      parentCurrent.addEventListener("click", () => {
        setIsOpen((prev) => !prev);
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (parent && parentCurrent) {
        parentCurrent.removeEventListener("click", () => {
          setIsOpen((prev) => !prev);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SSubMenu {...{ isOpen, minWidth }} ref={ref}>
      {Children.toArray(
        menus.map((m) =>
          m.type === "link" ? (
            <Link
              to={m.href || "/"}
              className="menu-item"
              onClick={() => {
                m.callback && m.callback();
              }}
            >
              {m.icon}
              <span className="item-title">{m.title}</span>
            </Link>
          ) : (
            <div
              className="menu-item"
              onClick={() => {
                m.callback && m.callback();
              }}
            >
              {m.icon}
              <span className="item-title">{m.title}</span>
            </div>
          )
        )
      )}
    </SSubMenu>
  );
}

const drop = keyframes`
  from {
    top: calc(100% + 30px);
  }
  to{
    top: calc(100% + 10px);
  }
`;

const SSubMenu = styled.div<{ minWidth: string; isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: white;
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  min-width: ${(props) => props.minWidth};
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  animation: 0.2s ${drop} ease forwards;
  z-index: 2;
  .menu-item {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 8px 10px;
    img {
      margin-right: 10px;
    }
    .item-title {
      font-size: 14px;
    }
    &:hover {
      background-color: ${theme.colors.primary.light_gray};
    }
  }
`;
